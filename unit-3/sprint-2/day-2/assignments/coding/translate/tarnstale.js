function showLanguages() {
  let input = document.getElementById("firstlanginput").value;

  let outputlanguages = document.getElementById("outputlang").value;

  async function translate() {
    const res = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: `${input}`,
        source: "en",
        target: `${outputlanguages}`,
      }),
      headers: { "Content-Type": "application/json" },
    });

    let data = await res.json();
    console.log("data:", data);
    let output = document.getElementById("output");

    if (input === null||data.translatedText==undefined) {
      return false;
    }

    output.innerHTML = data.translatedText;
  }
  translate();
}
