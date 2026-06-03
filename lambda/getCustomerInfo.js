exports.handler = async (event) => {

    const intentName = event.sessionState.intent.name;

    if (intentName === "AccountStatus") {
        return {
            message: "Your account is active."
        };
    }

    return {
        message: "Please connect to an agent."
    };
};
