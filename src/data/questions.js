const questions = [
{
	question: "Have you been diagnosed with diabetes?",
	type:"radio_text",
	image:"questionmark",
	options: [
      { id: "0", text: "Yes" },
      { id: "1", text: "No" },
    ]
},
{
	question: "How old are you?",
	type:"scale_age",
	image:"",
	options: []
},
{
	question: "You are...",
	type:"radio_pic",
	image:"",
	options: [
      { id: "0", text: "Female" },
      { id: "1", text: "Male" }
    ]
}, 
{
	question: "Have you ever been diagnosed with gestational diabetes?",
	type:"radio_text",
	image:"",
	options: [
      { id: "0", text: "Yes" },
      { id: "1", text: "No" }
    ]
},
{
	question: "What race or ethnicity best describes you?",
	type:"radio_text",
	image:"",
	options: [
      { id: "0", text: "Asian / Pacific Islander" },
	  { id: "1", text: "White / Caucasian" },
	  { id: "2", text: "South Asian" },
	  { id: "3", text: "Other" }
    ]
},
{
	question: "You weight and height",
	type:"scale_body",
	image:"",
	options: [
    ]
},
{
	question: "Do you have a mother, father, brother, or sister with diabetes",
	type:"radio_text",
	image:"",
	options: [
      { id: "0", text: "Yes" },
	  { id: "1", text: "No" },
    ]
},
{
	question: "Have you ever been diagnosed with high blood pressure?",
	type:"radio_text",
	image:"",
	options: [
      { id: "0", text: "Yes" },
	  { id: "1", text: "No" },
    ]
}, 
{
	question: "Are you physically active?",
	description:"At least 30 minutes of moderate physical activity (such as jogging) per day",
	type:"radio_text",
	image:"",
	options: [
      { id: "0", text: "Yes" },
	  { id: "1", text: "No" },
    ]
}
];


export default questions;