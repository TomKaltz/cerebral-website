Cerebral will emit events when running signals. Normally you do not need to listen to these events, but they are useful when you want to test signals or implement some crazy stuff :-)

```javascript
controller.on('change', function ({signal}) {})
controller.on('error', function (error) {})
controller.on('signalStart', function ({signal}) {})
controller.on('signalEnd', function ({signal}) {})
controller.on('actionStart', function ({signal, action}) {})
controller.on('actionEnd', function ({signal, action}) {})
controller.on('signalPredicted', function ({signal}) {})
controller.on('signalError', function ({signal, action}) {})
```
