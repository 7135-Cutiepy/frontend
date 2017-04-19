$(document).ready(function() {
  $.ajax({
    url:"http://localhost:3000/listClasses",
  }).done(function(classes) {
    classes.forEach(function(listing) {
      $('#data_target > table > tbody').append(`
        <tr>
          <td>`+listing.subject_code+' '+listing.course_number+`</td>
          <td>`+listing.section_number+`</td>
          <td>`+listing.course_title+`</td>
          <td>`+((listing.instructors[0]) ? listing.instructors[0].name : 'None Specified')+`</td>
          <td>`+listing.crn+`</td>
        </tr>
      `);
    });
  });
});
