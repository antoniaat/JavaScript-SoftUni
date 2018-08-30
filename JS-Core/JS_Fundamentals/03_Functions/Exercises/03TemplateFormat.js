// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/310/.

function formatToXml(input) {
    let xml = [];

    xml.push(
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
        "<quiz>");

    for (let i = 0; i < input.length; i += 2) {
        xml.push(
            "  <question>",
            "    " + input[i],
            "  </question>",
            "  <answer>",
            "    " + input[i + 1],
            "  </answer>",
        );
    }

    xml.push("</quiz>");

    return xml.join("\n");
}

console.log(formatToXml(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
));