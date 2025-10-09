# Set TradingView Alerts (Close‑Confirmed)

Follow these steps for **any** SignalPilot module.

## Create an alert
1. Right‑click the chart → **Add alert…**  
2. **Condition:** choose the indicator (e.g., “SP — EC Pro”)  
3. **Event:** pick a named event (e.g., `IGN`, `OUT`, `CAP`)  
4. **Options:** set **Once per bar close**  
5. **Message (optional):** use placeholders:
   ```json
   {"ticker":"{{ticker}}","tf":"{{interval}}","time":"{{timenow}}","event":"{{alert_name}}","close":{{close}}}
