abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    private votes: Record<string, number> = {};

    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    private votes: Record<string, number> = {};

    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): object {
        return Object.entries(this.votes)
            .sort(([, a], [, b]) => b - a) // Ordena por votos
            .map(([candidate, votes]) => ({ candidate, votes }));
    }
}

const election = new Election();
election.voteFor("Candidate A");
election.voteFor("Candidate B");
election.voteFor("Candidate A");

const poll = new Poll();
poll.voteFor("Candidate X");
poll.voteFor("Candidate Y");
poll.voteFor("Candidate X");

console.log(election.getResults());
console.log(poll.getResults());
