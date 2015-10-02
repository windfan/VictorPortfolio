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
			"images_large" : "images/victorportfolio_large.png",
			"alt" : "victorportfolio",
			"url" : "https://github.com/windfan/VictorPortfolio",
			"shortStory" : "One day, my friend asked me what kind of side project I want to do after graduation \
							to improve my resume. At that time, I wasn't quite sure. But I'm always sure I like to do \
							something that I can see the outcome, like a mobile application or a website.<br><br>\
							Then coming out of no where, I just told myself that I want to know more about web technology. There is no \
							specific reason, I just want to know it. Then I started to research and learn how to make a \
							good website, so here you see!",
			"features" : [	"Create a responsive website based on HTML5, CSS3, and Bootstrap.",
						 	"Using JSON and Javascript to make the website more modulized.",
						 	"Using jQuery to manipulate HTML elements to be more interactive."], 
			"videos" : "videos/none.mp4"
		},
		{
			"title" : "SOFTWARE DEFINED NETWORK",
			"subtitle" : "Network Controller Implementation",
			"dates" : "09/2014-12/2014",
			"images" : "images/sdn.png",
			"images_large" : "images/sdn_large.png",
			"alt" : "sdn",
			"url" : "https://github.com/windfan/Software-Defined-Network-Project",
			"shortStory" : "3 missions: <br><br> \
							<ul><li>Control the network flow to meet specific purposes.</li>\
								<li>Develop the SDN controller.</li>\
								<li>Build a functional network environment based on SDN controller and switches.</li>\
							</ul>",
			"features" : [	"ICMP and TCP packets take the shorter path.", 
							"UDP packets take the longer path.",
							"Implementing some access control rules.",
							"The solution to deal the overflow of flow entry in switch."],
			"videos" : "videos/sdn.mp4"
		},
		{
			"title" : "LOCATOR",
			"subtitle" : "Android Application",
			"dates" : "09/2014-12/2014",
			"images" : "images/locator.png",
			"images_large" : "images/locator_large.png",
			"alt" : "locator",
			"url" : "https://github.com/windfan/AndroidApp_Locator",
			"shortStory" : "This project was from a course that we had to act like a start up \
							company. We had to come up an idea and figure out who our target customers are. \
							<br><br>Then we had to interview them based on our prototype app we drew on papers just to \
							know how they will react to our idea or to know is the idea actually solving their problems. \
							<br><br>Finally we used last 1.5 months of the semester to start building our Android application.", 
			"features" : 	[	"Implementing 5 different pages with easy sliding gesture.",
								"Showing Google Map based on current GPS information in the app.",
								"Storing event information with SQLite.", 
								"Implementing search function."],
			"videos" : "videos/locator.mp4"
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
	var myWorksContainer = "myWorks-container" + (workCount+1);
	$("#"+myWorksContainer).append(HTMLmyWorksImg);
	$("#"+myWorksContainer).find('img').attr('src', myworks.projects[workCount].images);
	$("#"+myWorksContainer).find('img').attr('alt', myworks.projects[workCount].alt);
	$("#"+myWorksContainer).find('img').attr('data-target', "#" + myworks.projects[workCount].alt);
	
	//add border for victorportfolio.png
	if(myworks.projects[workCount].images === "images/victorportfolio.png") {
		$("#"+myWorksContainer).find('img').css("border", "1px solid black");
		$("#"+myWorksContainer).find('img').css("margin", "auto");
	}
	
	//append the title
	var formattedmyWorksTitle = HTMLmyWorksTitle.replace("%dataTitle%", myworks.projects[workCount].title);
	$("#"+myWorksContainer).append(formattedmyWorksTitle);
	//modify the title that is too long
	if(myworks.projects[workCount].title.length > 20) {
		$("#"+myWorksContainer).find('h3').css("font-size", "23px");
	}
	
	//append the subtitle
	var formattedmyWorksSubtitle = HTMLmyWorksSubtitle.replace("%data%", myworks.projects[workCount].subtitle);
	$("#"+myWorksContainer).append(formattedmyWorksSubtitle);
	
	//append the url
	var formattedmyWorksURL = HTMLmyWorksURL.replace("%data%", myworks.projects[workCount].url);
	formattedmyWorksURL = formattedmyWorksURL.replace("%data%", myworks.projects[workCount].url);
	$("#"+myWorksContainer).append(formattedmyWorksURL);
	
	//append modal elements
	var modalElement = '<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"';
	modalElement += 'id="' + myworks.projects[workCount].alt + '"' + '></div>';
	$('body').append(modalElement);
	var modalEle = $("#" + myworks.projects[workCount].alt);
	modalEle.append('<div class="modal-dialog modal-lg"></div>');
	modalEle.find('div.modal-dialog').append('<div class="modal-content"></div>');
	var modalContent = modalEle.find('div.modal-content');
	modalContent.append('<div class="modal-header">');
	modalContent.append('<div class="modal-body">');
	modalContent.append('<div class="modal-footer">');
	
	//add the header in modal
	modalEle.find('div.modal-header').append('<h4 class="modal-title">' + myworks.projects[workCount].title + '</h4>');
	
	//add the content in modal
	//1. add the image header in modal
	// modalEle.find('div.modal-body').append('<div class="modal-image"></div>');
	// modalEle.find('div.modal-image').addClass("text-center");
	// modalEle.find('div.modal-image').append('<img>');
	// modalEle.find('div.modal-image').find('img').attr("src", myworks.projects[workCount].images_large);
	// modalEle.find('div.modal-image').find('img').addClass("img-responsive");
	// modalEle.find('div.modal-image').find('img').css("margin", "auto");
	//1. add short story in modal
	modalEle.find('div.modal-body').append('<div class="modal-story"></div>');
	var modalStory = modalEle.find('div.modal-story');
	modalStory.addClass("text-left");
	modalStory.append('<h2><b>Short Story</b></h2>');
	modalStory.append('<h4></h4><hr>');
	modalStory.find('h4').append(myworks.projects[workCount].shortStory);

	//2. add features in modal
	modalEle.find('div.modal-body').append('<div class="modal-feature"></div>');
	var modalFeature = modalEle.find('div.modal-feature');
	modalFeature.addClass("text-left");
	modalFeature.append('<h2><b>Features</b></h2>');
	modalFeature.append('<h4></h4><hr>');
	modalFeature.find('h4').append('<ul></ul>');
	for(var feature in myworks.projects[workCount].features) {
		modalFeature.find('ul').append('<li>' + myworks.projects[workCount].features[feature] + '</li>');
	}

	//3. add video demo in modal
	modalEle.find('div.modal-body').append('<div class="modal-video"></div>');
	var modalVideo = modalEle.find('div.modal-video');
	modalVideo.addClass("text-center");
	modalVideo.append('<h2><b>Video Demo</b></h2>');
	modalVideo.append('<video controls></video><hr>');
	modalVideo.find('video').addClass("video-360x200");
	var pureId = getID(myworks.projects[workCount].videos, workCount);
	var videoId = pureId + "Id";
	modalVideo.find('video').attr("id", videoId);
	modalVideo.find('video').append('<source src="' + myworks.projects[workCount].videos + '" type="video/mp4">');

	//4. adding detectors
	//leaving the modal by clicking out of modal
	var myVideo = document.getElementById(videoId);
	$('#' + pureId).mouseleave(function() {
		myVideo.pause();
	});
	//leaving the modal by clicking cancel button
	$('#' + pureId).find('button').click(function() {
		myVideo.pause();
	})


	//add the button in modal footer
	modalEle.find('div.modal-footer').append('<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>');
}
function getID(videoPath, count) {
	var videoPathArray = videoPath.split("/");
	var videoArray = videoPathArray[1].split(".");
	return videoArray[0];
}

$('#victorportfolio').find('.modal-video').remove();
