//================================
//	view your project using anvil at:
//	http://images.dev
//
// or after you upload it to github at:
//	http://yourusername.github.io/images/
//================================

//STEP 1: Declare global variables for your images and upload button
var uploadButton;
var blurImage,girl,love;
var img;

function preload(){
	//STEP 2:
	// Load your image with loadImage("path/to/image.jpg")
	background = loadImage('images/background.jpg');
	cloud = loadImage('images/cloud.png');
	rain = loadImage('images/rain.png');
	//and save it to your global variable:
}

function setup() {
	//STEP 3
	//add a file upload button with CreateFileInput(_____);
	uploadButton =createFileInput(imageUploaded);
	//STEP 4:
  //set up your canvas with createCanvas(__,__);
	createCanvas(background.width,background.height);
	//blurImage.filter(BLUR,5);
}
function imageUploaded(file){
	//img= loadImage(file.data, drawMyImage);
	img= loadImage(file.data);
}

function drawMyImage(){
		image(img);
}

function draw() {
	//clear();

	image(background,0,0, background.width, background.height);

	imageMode(CENTER);

	if(mouseIsPressed){
		image(rain, mouseX, mouseY, 236, 220);
	} else {
			image(cloud, mouseX, mouseY, 236, 180);
	}
	//STEP 5:
	//draw your images with image(imagevariable);

	//STEP 7:
	//You're also going to need an if statement here to check
	//if the image the user uploaded exists to then draw it
	//(see image upload example version 2)

	if(img){
		image(img);
	}


}

//STEP 6:
//create a callback function (you can name it anything you'd like)
//which will be called when the user uploads an image:

	//and inside it you will need to save the loaded image to a global variable
