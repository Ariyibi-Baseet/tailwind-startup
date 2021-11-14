
var NotReady = document.getElementById('notReady');
var NotSet = document.getElementById('notSet');


NotReady.onclick = function showModal()
{
    swal({
        icon: "error",
        text: "Not Ready At The Moment",
      });
}

NotSet.onclick = function showModal()
{
    swal({
        icon: "error",
        text: "Not Ready At The Moment",
      });
}
