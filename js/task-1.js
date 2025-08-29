let styles = ["jazz", "blues"];
styles.push("rock-n-roll");
styles = styles.map((style) => (style === "blues" ? "classic" : style));

const logItems = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1}) ${array[i]}`);
  }
};

logItems(styles);
