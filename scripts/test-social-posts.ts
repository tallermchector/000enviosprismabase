import prisma from "../src/lib/prisma";

async function testTrigger() {
  console.log("Starting trigger test...");
  try {
    // 1. Insert Instagram post (leaving default fields blank)
    const postInsta = await prisma.socialPost.create({
      data: {
        platform: "instagram",
        content: "Testing Instagram defaults and trigger",
        postUrl: "https://instagram.com/p/test1",
      },
    });

    // 2. Insert Facebook post (leaving default fields blank)
    const postFb = await prisma.socialPost.create({
      data: {
        platform: "facebook",
        content: "Testing Facebook defaults and trigger",
        postUrl: "https://facebook.com/posts/test2",
      },
    });

    console.log("\n--- Instagram Post Result ---");
    console.log(`userName: ${postInsta.userName}`);
    console.log(`userAvatar: ${postInsta.userAvatar}`);
    console.log(`userUrl: ${postInsta.userUrl}`);
    console.log(`likes: ${postInsta.likes}`);
    console.log(`comments: ${postInsta.comments}`);
    console.log(`shares: ${postInsta.shares}`);

    console.log("\n--- Facebook Post Result ---");
    console.log(`userName: ${postFb.userName}`);
    console.log(`userAvatar: ${postFb.userAvatar}`);
    console.log(`userUrl: ${postFb.userUrl}`);
    console.log(`likes: ${postFb.likes}`);
    console.log(`comments: ${postFb.comments}`);
    console.log(`shares: ${postFb.shares}`);

    // Assertions or simple checks
    const instaOk = postInsta.userName === "Envios DosRuedas" &&
                    postInsta.userAvatar === "/LogoEnviosDosRuedas.webp" &&
                    postInsta.userUrl === "https://www.instagram.com/enviosdosruedas/" &&
                    postInsta.likes !== null && postInsta.comments !== null && postInsta.shares !== null;

    const fbOk = postFb.userName === "Envios DosRuedas" &&
                 postFb.userAvatar === "/LogoEnviosDosRuedas.webp" &&
                 postFb.userUrl === "https://facebook.com/enviosdosruedas" &&
                 postFb.likes !== null && postFb.comments !== null && postFb.shares !== null;

    if (instaOk && fbOk) {
      console.log("\n🎉 TEST SUCCESS: Trigger and database defaults are working perfectly!");
    } else {
      console.error("\n❌ TEST FAILED: Some defaults did not match the expected values.");
    }

    // Cleanup test posts
    await prisma.socialPost.deleteMany({
      where: {
        postUrl: {
          in: ["https://instagram.com/p/test1", "https://facebook.com/posts/test2"],
        },
      },
    });
    console.log("Cleanup completed.");

  } catch (error) {
    console.error("Test execution failed with error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testTrigger();
