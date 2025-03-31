SuiteOf('スモークテスト');


Scenario('Webサイトを開きログインする', ({ I }) => {
  I.amOnPage("https://fastify-webapp-sample-production-a1b8.up.railway.app/items"); 
  I.click("ログインする");
  I.fillField("ユーザー名", "user1");
  I.fillField("パスワード", "super-strong-passphrase");
  I.click("ログイン");
  I.see("user1 さん");
})
