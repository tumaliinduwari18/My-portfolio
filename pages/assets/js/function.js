// Navigation
$('.navbar').click(function(e){
    var location;
    $('#home').css("display", "none");
    $('#service').css("display", "none");
    $('#skill').css("display", "none");
    $('#mySkill').css("display", "none");
    $('#certificate').css("display", "none");
    $('#gallery').css("display", "none");
    $('#project').css("display", "none");
    $('#assignment').css("display", "none");
    $('#about').css("display", "none");
    $('#personalInfo').css("display", "none");
    $('#education').css("display", "none");
    $('#contact').css("display", "none");
    switch (e.target.id){
        case "btnHome": location = "home";break;
        case "btnService": location = "service";break;
        case "btnSkill": location = "mySkill";break;
        case "btnMySkill": location = "mySkill";break;
        case "btnCertificate": location = "certificate";break;
        case "btnGallery": location = "gallery";break;
        case "btnProject": location = "project";break;
        case "btnAssignment": location = "assignment";break;
        case "btnAbout": location = "mySkill";break;
        case "btnPersonalInfo": location = "personalInfo";break;
        case "btnEducation": location = "education";break;
        case "btnContact": location = "contact";break;
    }
    $('#'+location).css("display", "block");
});