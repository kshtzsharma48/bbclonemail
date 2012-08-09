describe("inbox", function(){

  mockMailModule();

  describe("when viewing the inbox", function(){
    var inbox;

    beforeEach(function(){
      affix("#email-preview-template div, article#main");

      inbox = BBCloneMail.module("Inbox");
      inbox.start();

      inbox.controller.showInbox();
    });

    afterEach(function(){
      inbox.stop();
    });

    it("should show all messages", function(){
      expect($("#main .email-list li").length).toBe(1);
    });

  });

});
