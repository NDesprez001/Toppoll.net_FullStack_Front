const getState = ({ getStore, getActions, setStore }) => {
	return {
		actions: {
			fetchSaveToStore: () => {
				fetch("https://toppolls.herokuapp.com/polls", {
					method: "GET",
					// method: "POST",
					cache: "no-cache"
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({ polls: data });
						console.log("polls", data);
					});
			}
		},
		store: {
			polls: [
				{
					creator_user: "Curly-Fry",
					date_started: "Fri, 06 Mar 2020 19:17:57 GMT",
					id: 1,
					image_link:
						"https://images.pexels.com/photos/776030/pexels-photo-776030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					info_link: "",
					option1: "Boat",
					option2: "Plane",
					option3: "Train",
					option4: "Drive Myself",
					percentages: {
						Boat: 50,
						"Drive Myself": 16.666666666666664,
						Plane: 33.33333333333333,
						Train: 0
					},
					poll_description:
						"A luxury cruise, flying first class, a glamourous bullet train, a scenic drive through the country; which getaway sounds best to you?",
					poll_question: "This is a test",
					voting_users: [
						{
							id: 1,
							option_picked: "Boat",
							poll_id: 1,
							poll_name: "What's the best way to travel?",
							user_id: 1,
							username: "kolis10"
						},
						{
							id: 2,
							option_picked: "Boat",
							poll_id: 1,
							poll_name: "What's the best way to travel?",
							user_id: 2,
							username: "Naz"
						},
						{
							id: 3,
							option_picked: "Plane",
							poll_id: 1,
							poll_name: "What's the best way to travel?",
							user_id: 3,
							username: "Curly-Fry"
						},
						{
							id: 4,
							option_picked: "Drive Myself",
							poll_id: 1,
							poll_name: "What's the best way to travel?",
							user_id: 4,
							username: "Coder"
						},
						{
							id: 5,
							option_picked: "Boat",
							poll_id: 1,
							poll_name: "What's the best way to travel?",
							user_id: 5,
							username: "Rager"
						},
						{
							id: 6,
							option_picked: "Plane",
							poll_id: 1,
							poll_name: "What's the best way to travel?",
							user_id: 6,
							username: "Tony"
						}
					]
				},
				{
					creator_user: "kolis10",
					date_started: "Fri, 06 Mar 2020 19:17:57 GMT",
					id: 2,
					image_link:
						"https://images.pexels.com/photos/365625/pexels-photo-365625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					info_link: "",
					option1: "I'm a believer",
					option2: "Conspiracy Theories aren't my thing",
					option3: "The Government is hiding something, just not aliens",
					option4: "The Government would never lie to us. Ever.",
					percentages: {
						"Conspiracy Theories aren't my thing": 16.666666666666664,
						"I'm a believer": 33.33333333333333,
						"The Government is hiding something, just not aliens": 16.666666666666664,
						"The Government would never lie to us. Ever.": 33.33333333333333
					},
					poll_description: "If there were aliens, we'd know about it now, right? Or would we?",
					poll_question: "Is the government hiding aliens in area 51?",
					voting_users: [
						{
							id: 7,
							option_picked: "The Government is hiding something, just not aliens",
							poll_id: 2,
							poll_name: "Is the government hiding aliens in area 51?",
							user_id: 1,
							username: "kolis10"
						},
						{
							id: 8,
							option_picked: "I'm a believer",
							poll_id: 2,
							poll_name: "Is the government hiding aliens in area 51?",
							user_id: 2,
							username: "Naz"
						},
						{
							id: 9,
							option_picked: "Conspiracy Theories aren't my thing",
							poll_id: 2,
							poll_name: "Is the government hiding aliens in area 51?",
							user_id: 3,
							username: "Curly-Fry"
						},
						{
							id: 10,
							option_picked: "The Government would never lie to us. Ever.",
							poll_id: 2,
							poll_name: "Is the government hiding aliens in area 51?",
							user_id: 4,
							username: "Coder"
						},
						{
							id: 11,
							option_picked: "The Government would never lie to us. Ever.",
							poll_id: 2,
							poll_name: "Is the government hiding aliens in area 51?",
							user_id: 5,
							username: "Rager"
						},
						{
							id: 12,
							option_picked: "I'm a believer",
							poll_id: 2,
							poll_name: "Is the government hiding aliens in area 51?",
							user_id: 6,
							username: "Tony"
						}
					]
				},
				{
					creator_user: "Naz",
					date_started: "Fri, 06 Mar 2020 19:17:57 GMT",
					id: 3,
					image_link:
						"https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					info_link: "https://drinkingage.procon.org/",
					option1: "Yes",
					option2: "No, it's fine the way it is",
					option3: "It should be raised",
					option4: null,
					percentages: {
						"It should be raised": 16.666666666666664,
						"No, it's fine the way it is": 50,
						Yes: 33.33333333333333
					},
					poll_description:
						"The drinking age is 21 everywhere in the United States, but are 18 year olds mature enough to drink responsibly?",
					poll_question: "Should the drinking age be lowered to 18?",
					voting_users: [
						{
							id: 13,
							option_picked: "It should be raised",
							poll_id: 3,
							poll_name: "Should the drinking age be lowered to 18?",
							user_id: 1,
							username: "kolis10"
						},
						{
							id: 14,
							option_picked: "Yes",
							poll_id: 3,
							poll_name: "Should the drinking age be lowered to 18?",
							user_id: 2,
							username: "Naz"
						},
						{
							id: 15,
							option_picked: "No, it's fine the way it is",
							poll_id: 3,
							poll_name: "Should the drinking age be lowered to 18?",
							user_id: 3,
							username: "Curly-Fry"
						},
						{
							id: 16,
							option_picked: "Yes",
							poll_id: 3,
							poll_name: "Should the drinking age be lowered to 18?",
							user_id: 4,
							username: "Coder"
						},
						{
							id: 17,
							option_picked: "No, it's fine the way it is",
							poll_id: 3,
							poll_name: "Should the drinking age be lowered to 18?",
							user_id: 5,
							username: "Rager"
						},
						{
							id: 18,
							option_picked: "No, it's fine the way it is",
							poll_id: 3,
							poll_name: "Should the drinking age be lowered to 18?",
							user_id: 6,
							username: "Tony"
						}
					]
				},
				{
					creator_user: "Coder",
					date_started: "Fri, 06 Mar 2020 19:17:57 GMT",
					id: 4,
					image_link:
						"https://images.pexels.com/photos/3694011/pexels-photo-3694011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					info_link: "",
					option1: "Yes, they have it coming",
					option2: "No, two wrongs won't make things right",
					option3: null,
					option4: null,
					percentages: {
						"No, two wrongs won't make things right": 33.33333333333333,
						"Yes, they have it coming": 66.66666666666666
					},
					poll_description:
						"If you're cheated on, you're hurt, angry, and feel disrespected, and rightfully so. But do you cheat back",
					poll_question: "Is revenge cheating justified?",
					voting_users: [
						{
							id: 19,
							option_picked: "No, two wrongs won't make things right",
							poll_id: 4,
							poll_name: "Is revenge cheating justified?",
							user_id: 1,
							username: "kolis10"
						},
						{
							id: 20,
							option_picked: "Yes, they have it coming",
							poll_id: 4,
							poll_name: "Is revenge cheating justified?",
							user_id: 2,
							username: "Naz"
						},
						{
							id: 21,
							option_picked: "Yes, they have it coming",
							poll_id: 4,
							poll_name: "Is revenge cheating justified?",
							user_id: 3,
							username: "Curly-Fry"
						},
						{
							id: 22,
							option_picked: "Yes, they have it coming",
							poll_id: 4,
							poll_name: "Is revenge cheating justified?",
							user_id: 4,
							username: "Coder"
						},
						{
							id: 23,
							option_picked: "No, two wrongs won't make things right",
							poll_id: 4,
							poll_name: "Is revenge cheating justified?",
							user_id: 5,
							username: "Rager"
						},
						{
							id: 24,
							option_picked: "Yes, they have it coming",
							poll_id: 4,
							poll_name: "Is revenge cheating justified?",
							user_id: 6,
							username: "Tony"
						}
					]
				},
				{
					creator_user: "Rager",
					date_started: "Fri, 06 Mar 2020 19:17:57 GMT",
					id: 5,
					image_link:
						"https://i2.wp.com/digiday.com/wp-content/uploads/2014/10/naenae.gif?resize=320%2C240&ssl=1",
					info_link: "",
					option1: "Football. The American Version",
					option2: "Basketball",
					option3: "Baseball; there's a reason it's called America's Pastime.",
					option4: "I don't really watch these",
					percentages: {
						"Baseball; there's a reason it's called America's Pastime.": 0,
						Basketball: 50,
						"Football. The American Version": 16.666666666666664,
						"I don't really watch these": 33.33333333333333
					},
					poll_description:
						"Sports are a part of everyday life, whether you prefer to play, watch or both. These three are some of the most popular in America, so how do they stack against each other?",
					poll_question: "Which is the better sport?",
					voting_users: [
						{
							id: 25,
							option_picked: "Football. The American Version",
							poll_id: 5,
							poll_name: "Which is the better sport?",
							user_id: 1,
							username: "kolis10"
						},
						{
							id: 26,
							option_picked: "Basketball",
							poll_id: 5,
							poll_name: "Which is the better sport?",
							user_id: 2,
							username: "Naz"
						},
						{
							id: 27,
							option_picked: "I don't really watch these",
							poll_id: 5,
							poll_name: "Which is the better sport?",
							user_id: 3,
							username: "Curly-Fry"
						},
						{
							id: 28,
							option_picked: "Basketball",
							poll_id: 5,
							poll_name: "Which is the better sport?",
							user_id: 4,
							username: "Coder"
						},
						{
							id: 29,
							option_picked: "I don't really watch these",
							poll_id: 5,
							poll_name: "Which is the better sport?",
							user_id: 5,
							username: "Rager"
						},
						{
							id: 30,
							option_picked: "Basketball",
							poll_id: 5,
							poll_name: "Which is the better sport?",
							user_id: 6,
							username: "Tony"
						}
					]
				},
				{
					creator_user: "Tony",
					date_started: "Fri, 06 Mar 2020 19:17:57 GMT",
					id: 6,
					image_link:
						"https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					info_link: "",
					option1: "Water",
					option2: "Earth",
					option3: "Fire",
					option4: "Air",
					percentages: {
						Air: 16.666666666666664,
						Earth: 16.666666666666664,
						Fire: 33.33333333333333,
						Water: 33.33333333333333
					},
					poll_description:
						"Manipulating the elements is a standard superpower to have, but often quite powerful. If you could choose one of these four elements, which would you master?",
					poll_question: "What element would you want to control?",
					voting_users: [
						{
							id: 31,
							option_picked: "Earth",
							poll_id: 6,
							poll_name: "What element would you want to control?",
							user_id: 1,
							username: "kolis10"
						},
						{
							id: 32,
							option_picked: "Air",
							poll_id: 6,
							poll_name: "What element would you want to control?",
							user_id: 2,
							username: "Naz"
						},
						{
							id: 33,
							option_picked: "Water",
							poll_id: 6,
							poll_name: "What element would you want to control?",
							user_id: 3,
							username: "Curly-Fry"
						},
						{
							id: 34,
							option_picked: "Water",
							poll_id: 6,
							poll_name: "What element would you want to control?",
							user_id: 4,
							username: "Coder"
						},
						{
							id: 35,
							option_picked: "Fire",
							poll_id: 6,
							poll_name: "What element would you want to control?",
							user_id: 5,
							username: "Rager"
						},
						{
							id: 36,
							option_picked: "Fire",
							poll_id: 6,
							poll_name: "What element would you want to control?",
							user_id: 6,
							username: "Tony"
						}
					]
				}
			]
		}
	};
};

export default getState;
