function shout(string) {
    return string.toUpperCase()
}
shout("hello");
function whisper(string) {
    return string.toLowerCase();
}
whisper("hello");
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    //const string = 'Umbrella'
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
      }
    if (string === string.toUpperCase()) {
        return "YES INDEED!"
    }
    if (string === "Let's have dinner together!") {
        return "I would love to!"
    }

}