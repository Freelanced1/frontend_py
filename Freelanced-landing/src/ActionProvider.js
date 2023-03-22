class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    handleOptions = (options) => {
      const message = this.createChatBotMessage(
        "How can I help you? Below are some possible options.",
        {
        //   widget: "overview",
          loading: true,
          terminateLoading: true,
          ...options
        }
      );
  
      this.addMessageToState(message);
    };
    handleJavascriptList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following resources for you on Javascript:",
            {
                widget: 'javascriptLinks'
            }
        );

        this.updateChatbotState(message);
    };

    updateChatbotState(message) {
        // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }));
    };
  
    handleGlobalStats = () => {
      const message = this.createChatBotMessage(
        "Here's the latest global stats.",
        {
          widget: "globalStatistics",
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      );
  
      this.addMessageToState(message);
    };
  
    handleLocalStats = () => {
      const message = this.createChatBotMessage(
        "Here you call fire up your business",
        {
          widget: "localStatistics",
          loading: true,
          terminateLoading: true,
          withAvatar: false
        }
      );
  
      this.addMessageToState(message);
    };
  
    handleContact = () => {
      const message = this.createChatBotMessage(
        "Call 1999900076 for your problem.",
        {
          widget: "ContactLink",
          loading: true,
          terminateLoading: true,
          withAvatar: false
        }
      );
  
      this.addMessageToState(message);
    };
  
    handleMedicine = () => {
      const message = this.createChatBotMessage(
        "We support all services like design , motion ,web development , branding ...",
        {
          widget: "medicineDelivery",
          loading: true,
          terminateLoading: true,
          withAvatar: true
        }
      );
  
      this.addMessageToState(message);
    };
  
    handleJoke = () => {
      var jokes = [
        "With our user-friendly platform, you can easily find and hire skilled professionals for any task.",
        "Visit our careers section for more information.",
        "To have more question please be patient",
        "Do you have problem with registering? Be patient!",
        "We are a freelance marketplace connecting businesses and individuals with skill.",
        "Send Email for us to solve your problem"
      ];
  
      var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  
      const message = this.createChatBotMessage(randomJoke);
  
      this.addMessageToState(message);
    };
  
    handleThanks = () => {
      const message = this.createChatBotMessage("You're welcome, and stay safe!");
  
      this.addMessageToState(message);
    };
  
  
    addMessageToState = (message) => {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, message]
      }));
    };
  }
  
  export default ActionProvider;
  