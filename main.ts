//% color="#ff8800" icon="\uf085" block="AI Maze"
namespace AIMaze {
    //% block="AI choose move for state %state"
    export function chooseMove(state: string): Promise<number> {
        return new Promise((resolve, reject) => {
            const url = "https://cold-block-4a48.paolo-g-lamanna.workers.dev/";

            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ state: state })
            })
            .then(r => r.json())
            .then(data => {
                const move = parseInt(data.move);
                resolve(move);
            })
            .catch(err => {
                console.log("AI error:", err);
                resolve(4); // wait
            });
        });
    }
}
