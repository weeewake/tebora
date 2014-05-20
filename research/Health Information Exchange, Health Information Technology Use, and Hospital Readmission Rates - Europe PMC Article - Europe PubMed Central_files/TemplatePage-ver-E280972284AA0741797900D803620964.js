$(function() {
$("#searchForm11").submit(function(event) {
event.preventDefault();
var query = $("#textfield").val();
var encodedQuery = encodeURIComponent(query);
window.location.href = "/search?query=" + encodedQuery;
});
});