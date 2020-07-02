export default function applyEvents (source, events) {
  for (const eventName in events) {
    if (Object.prototype.hasOwnProperty.call(events, eventName)) {
      source.on(eventName, events[eventName])
    }
  }
}

export function removeEvents (source, events) {
  for (const eventName in events) {
    if (Object.prototype.hasOwnProperty.call(events, eventName)) {
      source.un(eventName, events[eventName])
    }
  }
}
