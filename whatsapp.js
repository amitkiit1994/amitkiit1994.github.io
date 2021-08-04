var url =
  "https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?33755";
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = url;
var options = {
  enabled: true,
  chatButtonSetting: {
    backgroundColor: "#4dc247",
    ctaText: "",
    borderRadius: "25",
    marginLeft: "0",
    marginBottom: "50",
    marginRight: "50",
    position: "right",
  },
  brandSetting: {
    brandName: "Amit Kumar Das",
    brandSubTitle: "I would reply typically within a day!",
    brandImg: "dp.png",
    welcomeText: "Hello!\nWhat is it that you want to tell me?",
    messageText: "Hello, I have a question about {{page_link}}",
    backgroundColor: "#0a5f54",
    ctaText: "Start Chat",
    borderRadius: "25",
    autoShow: false,
    phoneNumber: "918093151099",
  },
};
s.onload = function () {
  CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName("script")[0];
x.parentNode.insertBefore(s, x);
