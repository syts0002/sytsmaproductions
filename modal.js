// Image modal modified from W3 schools
// https://www.w3schools.com/howto/howto_css_modal_images.asp

const modal = document.getElementById('myModal')

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = $('.pictureGrid')
const modalImg = $('#img01')
const captionText = document.getElementById('caption')
$('.pictureGrid').click(function() {
  modal.style.display = 'block'
  const newSrc = this.src
  modalImg.attr('src', newSrc)
  captionText.innerHTML = this.alt
})

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0]

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none'
}
