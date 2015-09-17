var bio = {
	"name" : "Victor Huang",
	"roles" : ["Front-end Developer", "Java Developer"],
	"welcomeMessage" : "Hi! I'm Victor. Welcome to my website.",
	"images" : "images/headShot.png",
	"contacts" : {
		"mobile" : "312-894-9762",
		"email" : ["mailto:ryu1031@gmail.com", "images/mail.png", "email"], 
		"github" : ["https://github.com/windfan?tab=repositories", "images/github.png", "github"],
		"linkedin" : ["https://www.linkedin.com/pub/tzu-hao-victor-huang/88/90b/43a", "images/in.png", "linkedin"],
		"facebook" : ["https://www.facebook.com/ryuspace", "images/fb.png", "facebook"],
		"location" : "New York City"
	}, 
	"mystory" : ["I like programming. I will feel a sense of accomplishment after solving an algorithm problems or \
				after seeing the project's outcome I've been developing. And that's the thing that keeps me going.", 
				"Also, I learn fast and I'm not afraid of challenge. Every time I faced a challenge, I always made \
				plans to solve them, bit by bit, steps by steps.", 
				"What's next for me? I want to immerse myself into the world of coding and develop something that \
				is helpful to people, as well as gaining the experience to be a professional developer."
	],
	"skills" : {
		"front-end" : ["JavaScript", "HTML5", "CSS3", "jQuery", "JSON", "bootstrap"], 
		"back-end" : ["Java", "Python", "MySQL"],
		"mobile" : ["Android Development", "SQLite", "Eclipse"]
	}	
};

// Title Area
var formattedName = HTMLheaderName.replace("%data%", bio.name);
if(bio.roles.length > 0) {
	var roleStr = "";
	var roleCount = 0;
	for(roleCount = 0; roleCount < bio.roles.length-1; roleCount++) {
		roleStr += bio.roles[roleCount] + " / ";
	}
	roleStr += bio.roles[bio.roles.length-1];
}
var formattedRole = HTMLheaderRole.replace("%data%", roleStr);
$("#title-row").append(HTMLtitleStart);
$("#title-container").append(formattedName);
$("#title-container").append(formattedRole);

//My Story Title Area
$("#myStoryTitle-row").append(HTMLmyStoryTitleStart);
$("#myStoryTitle-row").append(HTMLsocialStart);
for(var contact in bio.contacts) {
	if(bio.contacts[contact].constructor === Array){
		var socialDetailArray = bio.contacts[contact];
		var formattedSocial = HTMLSocial.replace("%dataURL%", socialDetailArray[0]);
		formattedSocial = formattedSocial.replace("%dataImg%", socialDetailArray[1]);
		formattedSocial = formattedSocial.replace("%dataAlt%", socialDetailArray[2]);
		$("#social-container").append(formattedSocial);
	}	
}
//My Story Area
$("#myStory-row").append(HTMLmyStoryStart);
for(var para in bio.mystory) {
	var formattedPara = HTMLmyStoryPara.replace("%data%", bio.mystory[para]);
	$("#myStory-container").append(formattedPara);
}

var myworks = {
	"projects" : [
		{
			"title" : "VICTOR | PORTFOLIO",
			"subtitle" : "Personal Website",
			"dates" : "09/2015-09/2015",
			"images" : "images/victorportfolio.png",
			"videos" : ["%none%"],
			"alt" : "victorportfolio",
			"url" : "https://github.com/windfan/VictorPortfolio"
		},
		{
			"title" : "SOFTWARE DEFINED NETWORK",
			"subtitle" : "Network Controller Implmentation",
			"dates" : "09/2014-12/2014",
			"images" : "images/sdn.png",
			"videos" : ["%none%"],
			"alt" : "sdn",
			"url" : "https://github.com/windfan/Software-Defined-Network-Project"
		},
		{
			"title" : "LOCATOR",
			"subtitle" : "Android Application",
			"dates" : "09/2014-12/2014",
			"images" : "%none%",
			"videos" : ["videos/locator_small.mp4", "videos/locator_small.ogg", "videos/locator_small.webm"],
			"alt" : "locator",
			"url" : "https://github.com/windfan/AndroidApp_Locator"
		}
	]
};


//My Works Title Area
$("#myWorksTitle-row").append(HTMLmyWorksTitleStart);

//My Work Area
for(var workCount = 0; workCount < myworks.projects.length; workCount++) {
	var formattedmyWorksStart = HTMLmyWorksStart.replace("%data%", workCount+1);
	$("#myWorks-row").append(formattedmyWorksStart);
	//append the image
	var formattedmyWorksImg = HTMLmyWorksImg.replace("%dataImg%", myworks.projects[workCount].images);
	formattedmyWorksImg = formattedmyWorksImg.replace("%dataAlt%", myworks.projects[workCount].alt);
	formattedmyWorksImg = addBorderOrVideo(formattedmyWorksImg, workCount);
	var myWorksContainer = "myWorks-container" + (workCount+1);
	$("#"+myWorksContainer).append(formattedmyWorksImg);
	//append the title
	var formattedmyWorksTitle = HTMLmyWorksTitle.replace("%dataTitle%", myworks.projects[workCount].title);
	formattedmyWorksTitle = testTitleLength(formattedmyWorksTitle, workCount);
	$("#"+myWorksContainer).append(formattedmyWorksTitle);
	//append the subtitle
	var formattedmyWorksSubtitle = HTMLmyWorksSubtitle.replace("%data%", myworks.projects[workCount].subtitle);
	$("#"+myWorksContainer).append(formattedmyWorksSubtitle);
	//append the url
	var formattedmyWorksURL = HTMLmyWorksURL.replace("%data%", myworks.projects[workCount].url);
	$("#"+myWorksContainer).append(formattedmyWorksURL);
}
function testTitleLength(str, count) {
	if(myworks.projects[count].title.length > 20) {
		str = str.replace("%dataStyle%", 'style="font-size: 22px;"');
	}
	else {
		str = str.replace("%dataStyle%", '');	
	}
	return str;
}
function addBorderOrVideo(str, count) {
	if(myworks.projects[count].images === "images/victorportfolio.png") {
		str = str.replace("%dataStyle%", 'style="border: 1px solid black;"');
	}
	else {
		str = str.replace("%dataStyle%", '');	
	}
	if(myworks.projects[count].images === "%none%") {
		var videoElement = "";
		var videoHeader = '<video autoplay="true" class="video-360x200" loop="true">';
		var videoTail = '</video>';
		videoElement += videoHeader;
		for(video in myworks.projects[count].videos) {
			var formattedvideoSource = HTMLvideoSource.replace("%data%", myworks.projects[count].videos[video]);
			videoElement += formattedvideoSource;
		}
		videoElement += videoTail;
		return videoElement;
	}
	return str;
}

