import * as readline from "readline";

interface GitHubEvent {
	id: string;
	type: string;
	actor: {
		id: number;
		login: string;
		display_login: string;
		gravatar_id: string;
		url: string;
		avatar_url: string;
	};
	repo: {
		id: number;
		name: string;
		url: string;
	};
	payload: {
		repository_id: number;
		push_id: number;
		ref: string;
		head: string;
		before: string;
	};
	public: boolean;
	created_at: string;
}

async function getUserData(username: string): Promise<string> {
	try {
		const response = await fetch(`https://api.github.com/users/${username}/events`);

		if (!response.ok) {
			throw Error(`Error: ${response.status}: ${response.statusText}`);
		}

		const data = (await response.json()) as GitHubEvent[];
		const pushEvents = data.map((value) => value.created_at);

		return JSON.stringify(pushEvents, null, 2);
	} catch (error) {
		return `Failed to fetch data for user: ${username}. Reason: ${error}`;
	}
}

function input(): void {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	rl.question("Enter GitHub username: ", async (username) => {
		// Hit the endpoint on the username
		console.log("Fetching dates of the most recent user pushes");
		console.log(await getUserData(username));
		rl.close();

		input();
	});
}

function main(): void {
	input();
}

main();
