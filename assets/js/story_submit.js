/* Webarch Admin Dashboard 
/* This JS is only for DEMO Purposes - Extract the code that you need
-----------------------------------------------------------------*/	
$(document).ready(function(){
	
	document.getElementById('story-image').addEventListener('change', handleFileSelect, false);

	//HTML5 editor
	$('#text-editor').wysihtml5();
	
	//Drag n Drop up-loader
	$("div#myId").dropzone({ url: "/file/post" });
	Dropzone.options.storyImageDropzone = {
  		acceptedFiles: "image/*"
	};
	
	//Single instance of tag inputs  -  can be initiated with simply using data-role="tagsinput" attribute in any input field
	$('#source-tags').tagsinput({
	
	});
});

function storySubmit() {
	var name = $('#name').val();
	var email = $('#email').val();
	var story = $('#story').val();
	var tags = $('#source-tags').val().split(",");
	var file = document.getElementById('story-image').files[0];
	var ref = new Firebase("https://gtarboretum.firebaseio.com");
	var storiesRef = ref.child("stories");

	if (file) {
		loadImage.parseMetaData(file, function (data) {
			var imgOrientation = data.exif ? data.exif.get('Orientation') : 0;
			loadImage(
				file,
				function (canvas) {
					storiesRef.push({name: name, email: email, story: story, tags: tags, file: canvas.toDataURL(), visible: false}, 
						function() {
							window.location.href = "index.html"; 
						});
				},
				{
					maxWidth: (imgOrientation < 5) ? 800 : 600,
					maxHeight: (imgOrientation < 5) ? 600 : 800,
					canvas: true,
					orientation: imgOrientation
				}
			);
		});
	} else {
		storiesRef.push({name: name, email: email, story: story, tags: tags, file: "", visible: false}, 
						function() {
							window.location.href = "index.html"; 
						});
	}
}

function handleFileSelect(evt) {
	var files = evt.target.files;
	var file = files[0];

	var preview = document.getElementById('image-preview');
	loadImage.parseMetaData(file, function (data) {
		var imgOrientation = data.exif ? data.exif.get('Orientation') : 0;
		loadImage(
			file,
			function (canvas) {
				preview.src = canvas.toDataURL();
			},
			{
				maxWidth: (imgOrientation < 5) ? 800 : 600,
				maxHeight: (imgOrientation < 5) ? 600 : 800,
				canvas: true,
				orientation: imgOrientation
			}
		);
	});

}