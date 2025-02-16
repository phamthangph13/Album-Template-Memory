document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('birthdayModal');
    const birthdayItem = document.getElementById('birthday-item');
    const birthdayTitle = birthdayItem.querySelector('h3');
    const birthdayText = birthdayItem.querySelector('p');
    const closeBtn = document.querySelector('.close');
    const monthDisplay = document.getElementById('monthDisplay');
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');
    
    let currentDate = new Date();
    const birthdayDate = new Date(2005, 0, 13); 
    
    // Mở modal khi click vào bất kỳ phần nào của phần sinh nhật
    birthdayItem.addEventListener('click', showModal);
    birthdayTitle.addEventListener('click', showModal);
    birthdayText.addEventListener('click', showModal);
    
    function showModal(event) {
        event.stopPropagation(); // Ngăn chặn sự kiện click lan tỏa
        modal.style.display = 'block';
        renderCalendar();
    }
    
    // Đóng modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
    
    // Xử lý calendar
    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        monthDisplay.textContent = `Tháng ${month + 1}, ${year}`;
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysContainer = document.getElementById('calendar-days');
        daysContainer.innerHTML = '';
        
        // Thêm các ô trống cho những ngày đầu tháng
        for(let i = 0; i < firstDay.getDay(); i++) {
            daysContainer.innerHTML += '<div></div>';
        }
        
        // Thêm các ngày trong tháng
        for(let day = 1; day <= lastDay.getDate(); day++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = day;
            
            // Kiểm tra nếu là ngày sinh nhật
            if(month === birthdayDate.getMonth() && day === birthdayDate.getDate()) {
                dayDiv.classList.add('birthday');
            }
            
            daysContainer.appendChild(dayDiv);
        }
    }
    
    prevMonth.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });
    
    nextMonth.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });
}); 