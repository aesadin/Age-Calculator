import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    const inputPlanet = $("input:radio[name=planet]:checked").val();
    const inputtedAge = $("input#age").val();
    const inputtedLifeExpectancy = $("input#life").val();
  });
});
