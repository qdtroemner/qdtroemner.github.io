const EVENT = '2022azva';
const TEAM = 'frc1212';
var client = new TBA(EVENT, TEAM);

const PARENT_URL = 'localhost';

function set_stream_URL() {
	client.get_event().then(data => {
		if (data.webcasts.length > 0) {
			let webcasts = data.webcasts;
			for (webcast of webcasts) {
				if (webcast.type == "twitch") {
					let channelID = webcast.channel;
					let streamURL = `https://player.twitch.tv/?channel=${channelID}&parent=${PARENT_URL}`;
					document.getElementById('event-stream').src = streamURL;
				}
			}
		}
	});
}

function set_next_match_info() {
	/*client.get_team_matches().then(data => {
		let next_match = Infinity; // Set it to highest possible value and work down
		for (match of data) {
			let n = match.match_number;
			if (match.actual_time != null) {
				continue;
			}
			if (n < next_match) {
				next_match = n;
			}
		}
		if (next_match == Infinity) {next_match = "None"}
		document.getElementById('next-match-label').innerHTML = next_match;
	});*/
	client.get_team_status().then(team_status_data => {
		let next_match_key = team_status_data.next_match_key;
		client.get_event_matches().then(event_matches_data => {
			for (match of event_matches_data) {
				if (match.key == next_match_key) {
					document.getElementById('next-match-label').innerHTML = match.match_number;
					red_team_keys = match.alliances.red.team_keys;
					red_team_key_cells = document.getElementById("blue-alliance").getElementsByClassName("team-key");
					for (cell_i in red_team_key_cells) {
						red_team_key_cells[cell_i].innerText = red_team_keys[cell_i];
					}
					blue_team_keys = match.alliances.red.team_keys;
					blue_team_key_cells = document.getElementById("blue-alliance").getElementsByClassName("team-key");
					for (cell_i in blue_team_key_cells) {
						blue_team_key_cells[cell_i].innerText = blue_team_keys[cell_i];
					}
					break;
				}
			}
		});
	});
}

(function() {
	console.log("Ready");
	set_stream_URL();
	set_next_match_info();

	client.get_team_matches().then(data => {
		console.log(data);
	});
})();