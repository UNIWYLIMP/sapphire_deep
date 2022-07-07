let profileBtn = document.getElementById("profile-toggle");
let profileList = document.querySelector('.profile-list');


profileBtn.addEventListener('click', function(){
    profileList.classList.toggle('show');
});