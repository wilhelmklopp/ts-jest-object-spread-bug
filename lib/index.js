module.exports = () => {
  const myObject = {
    "bug": "can't",
    "come": "to the phone right now",
  }
  return {
    ...myObject,
    "why?": "Oh, cause she's dead!"
  }
}