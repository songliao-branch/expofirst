const questions = [
{
	question: "Have you been diagnosed with diabetes?",
	type:"radio",
	image:"questionmark",
	options: [
      { id: "0", text: "Yes" },
      { id: "1", text: "No" },
    ]
},
{
	question: "How old are you?",
	type:"scale",
	image:"",
	options: []
},
{
	question: "You are...",
	type:"radio",
	image:"",
	options: [
      { id: "0", text: "Female" },
      { id: "1", text: "Male" }
    ]
}
];


export default questions;