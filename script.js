const reviews = [
	{
		id: 1,
		name: 'Sara Jones',
		job: 'Front End Developer',
		img: 'images/female.png',
		text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto perferendis recusandae quasi, numquam aliquam totam .'
	}, {
		id: 2,
		name: 'Ankit Gupta',
		job: 'Full Stack Developer',
		img: 'images/male.png',
		text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto perferendis recusandae quasi, numquam aliquam totam rem.'
	}, {
		id: 3,
		name: 'John Doe',
		job: 'ux designer',
		img: 'images/female1.jpg',
		text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto perferendis recusandae quasi, numquam aliquam.'
	},
]

console.log(img__person);

let current = 0;
/*author.textContent = reviews[current].name;
img__person.src.value = reviews[current].img;*/


window.addEventListener("DOMContentLoaded", () => {

	show(current);
})

function show(person) {
	const val = reviews[person];
	img__person.src = val.img;
	author.textContent = val.name;
	job.textContent = val.job;
	info.textContent = val.text;

}
const prev = () => {
	current--;
	if (current < 0) {
		current = reviews.length - 1;
	}
	show(current);
}



const next = () => {

	current++;
	if (current > reviews.length - 1) {
		current = 0;
	}
	show(current);

}