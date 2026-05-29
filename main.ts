//% color="#ff8800" icon="\uf085" block="AI Maze"
namespace AIMaze {

    //% block="AI choose move for state %state"
    export function chooseMove(state: string, handler: (move: number) => void) {

        const url = "https://cold-block-4a48.paolo-g-lamanna.workers.dev/";

        control.runInParallel(() => {
            const body = JSON.stringify({ state: state });

            // MakeCode-safe HTTP POST
            const response = net.httpPostJson(url, body);

            if (response && response.move) {
                handler(parseInt(response.move));
            } else {
                handler(4); // default to wait
            }
        });
    }
}
