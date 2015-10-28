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
	var reader = new FileReader();

	reader.onloadend = function() {
		var ref = new Firebase("https://gtarboretum.firebaseio.com");
		var storiesRef = ref.child("stories");
		storiesRef.push({name: name, email: email, story: story, tags: tags, file: reader.result, visible: false}, function(){
           window.location.href = "index.html"; 
        });
        

    };

    if (file) {
    	reader.readAsDataURL(file);
    }

	return false;
}

function handleFileSelect(evt) {
	var files = evt.target.files;
	var file = files[0];
	var reader = new FileReader();

	reader.onloadend = function() {
		var preview = document.getElementById('image-preview');
		preview.src = reader.result;
		preview.display = "initial";
    };

    if (file) {
    	reader.readAsDataURL(files[0]);
    }
}