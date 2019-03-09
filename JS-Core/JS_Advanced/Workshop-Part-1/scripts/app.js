$(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4
});

(function attachEvents() {

    $('#bookHourBtn').click(addMeetingWithLecturer);

    function addMeetingWithLecturer(event) {
        event.stopPropagation();
        event.preventDefault();

        let consultationInfo = takeTheCurrentConsultationInfo();
        if (consultationInfo) appendTheCurrentConsultation(consultationInfo);
    }

    function updateSeminarsCount() {
        let currentCount = $('.education article:nth-child(3) .box-body ul li').length;
        $('.box-footer span').text(currentCount);

        console.log(currentCount);
    }

    function appendTheCurrentConsultation(consultationInfo) {
        let newConsultation = $(`<li><span>${consultationInfo}</span><i class="fas fa-chevron-circle-right"></i></li>`);
        $('.education article:nth-child(3) .box-body ul').append(newConsultation);
        $.notify("Access granted", "success");
        updateSeminarsCount();
    }

    function takeTheCurrentConsultationInfo() {
        // We can add username validation. If username is valid we can add the meeting
        let lecturerName = $('#lecturer option:selected').text().split(' ')[0];

        if (lecturerName !== 'Име') {
            let dateAndTime = $('#dateTimeInput').val().split(' ');
            let date = dateAndTime[0].split('/');
            let time = dateAndTime[1];

            let monthAndDay = `${date[1]}/${date[2]}`;

            return `${lecturerName} - ${monthAndDay} - ${time}`;
        }

        return false;
    }
}());
