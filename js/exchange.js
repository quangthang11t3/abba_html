$(document).ready(function() {
    $(function () {
        $('#datetimepicker1').datetimepicker({
        	format: 'DD/MM/YYYY'
        });
        $('#datetimepicker2').datetimepicker({
        	format: 'DD/MM/YYYY',
            useCurrent: false //Important! See issue #1075
        });
        $("#datetimepicker1").on("dp.change", function (e) {
            $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
        });
        $("#datetimepicker2").on("dp.change", function (e) {
            $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
        });
    });

    $('#overview, #app, #adver').DataTable();
});