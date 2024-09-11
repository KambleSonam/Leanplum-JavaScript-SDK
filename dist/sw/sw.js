(()=>{importScripts("https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js");var t="__name__",i={};self.addEventListener("push",(function(e){var o=e.data&&e.data.text()?e.data.text():null;if(o){var n=JSON.parse(o);if(n&&n.title&&n.tag){n.data&&n.data.openAction&&n.data.openAction.hasOwnProperty(t)&&"Open URL"===n.data.openAction[t]&&n.data.openAction.hasOwnProperty("URL")&&(i[n.tag]=n.data.openAction.URL);var a=n.title;delete n.title,e.waitUntil(self.registration.showNotification(a,n))}else console.log("Leanplum: No options, title or tag/id received, skipping display.")}else console.log("Leanplum: Push received without payload, skipping display.")})),self.addEventListener("notificationclick",(function(t){if(console.log("Leanplum: [Service Worker] Notification click received."),t.notification.close(),t.notification&&t.notification.tag){var e=t.notification.tag,o=i[e];o?(delete i[e],t.waitUntil(clients.openWindow(o))):console.log("Leanplum: [Service Worker] No action defined, doing nothing.")}else console.log("Leanplum: No notification or tag/id received, skipping open action.")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3cvc3cuanMiLCJtYXBwaW5ncyI6Ik1Bb0NBQSxjQUFjLDRFQUNkLElBQUlDLEVBQWtCLFdBR2xCQyxFQUFjLENBQUMsRUEyRG5CQyxLQUFLQyxpQkFBaUIsUUF0RHRCLFNBQXNCQyxHQUNsQixJQUFJQyxFQUFhRCxFQUFNRSxNQUFRRixFQUFNRSxLQUFLQyxPQUFTSCxFQUFNRSxLQUFLQyxPQUFTLEtBQ3ZFLEdBQUtGLEVBQUwsQ0FLQSxJQUFJRyxFQUFVQyxLQUFLQyxNQUFNTCxHQUd6QixHQUFLRyxHQUFZQSxFQUFRRyxPQUFVSCxFQUFRSSxJQUEzQyxDQU9JSixFQUFRRixNQUFRRSxFQUFRRixLQUFLTyxZQUM3QkwsRUFBUUYsS0FBS08sV0FBV0MsZUFBZWQsSUF6QnpCLGFBMEJkUSxFQUFRRixLQUFLTyxXQUFXYixJQUN4QlEsRUFBUUYsS0FBS08sV0FBV0MsZUExQmxCLFNBMkJOYixFQUFZTyxFQUFRSSxLQUFPSixFQUFRRixLQUFLTyxXQUFrQixLQUc5RCxJQUFJRixFQUFRSCxFQUFRRyxhQUNiSCxFQUFRRyxNQUdmUCxFQUFNVyxVQUFVYixLQUFLYyxhQUFhQyxpQkFBaUJOLEVBQU9ILEdBZDFELE1BSElVLFFBQVFDLElBQUksb0VBTmhCLE1BRklELFFBQVFDLElBQUksNkRBMEJwQixJQTBCQWpCLEtBQUtDLGlCQUFpQixxQkFsQnRCLFNBQW1DQyxHQUcvQixHQUZBYyxRQUFRQyxJQUFJLDJEQUNaZixFQUFNZ0IsYUFBYUMsUUFDZGpCLEVBQU1nQixjQUFpQmhCLEVBQU1nQixhQUFhUixJQUEvQyxDQUlBLElBQUlVLEVBQWlCbEIsRUFBTWdCLGFBQWFSLElBQ3BDVyxFQUFnQnRCLEVBQVlxQixHQUMzQkMsVUFJRXRCLEVBQVlxQixHQUVuQmxCLEVBQU1XLFVBQVVTLFFBQVFDLFdBQVdGLEtBTC9CTCxRQUFRQyxJQUFJLCtEQUpoQixNQUZJRCxRQUFRQyxJQUFJLHNFQVlwQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhbnBsdW0tc2RrLy4vc3JjL1B1c2hTZXJ2aWNlV29ya2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDIwIExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICpcbiAqICBPcmlnaW5hbCBGaWxlOlxuICpcbiAqICBQdXNoIE5vdGlmaWNhdGlvbnMgQ29kZUxhYlxuICogIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG5pbXBvcnRTY3JpcHRzKCdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXRpYy53aXpyb2NrZXQuY29tL2pzL3N3X3dlYnB1c2guanMnKTtcbnZhciBBQ1RJT05fTkFNRV9LRVkgPSAnX19uYW1lX18nO1xudmFyIE9QRU5fVVJMX0FDVElPTiA9ICdPcGVuIFVSTCc7XG52YXIgQVJHX1VSTCA9ICdVUkwnO1xudmFyIG9wZW5BY3Rpb25zID0ge307XG4vKipcbiAqIFRyaWdnZXJlZCBvbiBwdXNoIG1lc3NhZ2UgcmVjZWl2ZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIHB1c2ggcGF5bG9hZCB0aGF0IHRoZSBicm93c2VyIHJlY2VpdmVkLlxuICovXG5mdW5jdGlvbiBwdXNoTGlzdGVuZXIoZXZlbnQpIHtcbiAgICB2YXIganNvblN0cmluZyA9IGV2ZW50LmRhdGEgJiYgZXZlbnQuZGF0YS50ZXh0KCkgPyBldmVudC5kYXRhLnRleHQoKSA6IG51bGw7XG4gICAgaWYgKCFqc29uU3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogUHVzaCByZWNlaXZlZCB3aXRob3V0IHBheWxvYWQsIHNraXBwaW5nIGRpc3BsYXkuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTQ2hlY2tGdW5jdGlvblNpZ25hdHVyZXNcbiAgICB2YXIgb3B0aW9ucyA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgLyoqIEBuYW1lc3BhY2Ugb3B0aW9ucy50aXRsZSBUaGUgdGl0bGUgb2YgdGhlIHB1c2ggbm90aWZpY2F0aW9uLiAqKi9cbiAgICAvKiogQG5hbWVzcGFjZSBvcHRpb25zLnRhZyBUaGUgaWQgb2YgdGhlIHB1c2ggbm90aWZpY2F0aW9uICoqL1xuICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy50aXRsZSB8fCAhb3B0aW9ucy50YWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBObyBvcHRpb25zLCB0aXRsZSBvciB0YWcvaWQgcmVjZWl2ZWQsIHNraXBwaW5nICcgK1xuICAgICAgICAgICAgJ2Rpc3BsYXkuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gRXh0cmFjdCBvcGVuIGFjdGlvbiB1cmwuIFdlIG9ubHkgc3VwcG9ydCBvcGVuIHVybCBhY3Rpb24gZm9yIG5vdy5cbiAgICAvKiogQG5hbWVzcGFjZSBvcHRpb25zLmRhdGEub3BlbkFjdGlvbiBUaGUgb3BlbkFjdGlvbiBvZiB0aGUgcHVzaCBub3RpZmljYXRpb24uICoqL1xuICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLm9wZW5BY3Rpb24gJiZcbiAgICAgICAgb3B0aW9ucy5kYXRhLm9wZW5BY3Rpb24uaGFzT3duUHJvcGVydHkoQUNUSU9OX05BTUVfS0VZKSAmJlxuICAgICAgICBvcHRpb25zLmRhdGEub3BlbkFjdGlvbltBQ1RJT05fTkFNRV9LRVldID09PSBPUEVOX1VSTF9BQ1RJT04gJiZcbiAgICAgICAgb3B0aW9ucy5kYXRhLm9wZW5BY3Rpb24uaGFzT3duUHJvcGVydHkoQVJHX1VSTCkpIHtcbiAgICAgICAgb3BlbkFjdGlvbnNbb3B0aW9ucy50YWddID0gb3B0aW9ucy5kYXRhLm9wZW5BY3Rpb25bQVJHX1VSTF07XG4gICAgfVxuICAgIC8vIEV4dHJhY3QgdGl0bGUgYW5kIGRlbGV0ZSBmcm9tIG9wdGlvbnMuXG4gICAgdmFyIHRpdGxlID0gb3B0aW9ucy50aXRsZTtcbiAgICBkZWxldGUgb3B0aW9ucy50aXRsZTtcbiAgICAvKiogQG5hbWVzcGFjZSBzZWxmLnJlZ2lzdHJhdGlvbiAqKi9cbiAgICAvKiogQG5hbWVzcGFjZSBzZWxmLnJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uICoqL1xuICAgIGV2ZW50LndhaXRVbnRpbChzZWxmLnJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKHRpdGxlLCBvcHRpb25zKSk7XG59XG4vKipcbiAqIENhbGxiYWNrIHRoYXQgaGFuZGxlcyBjbGlja3Mgb24gdGhlIG5vdGlmaWNhdGlvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgbm90aWZpY2F0aW9uIGV2ZW50IG9iamVjdC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBldmVudC5ub3RpZmljYXRpb24gVGhlIG5vdGlmaWNhdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBldmVudC53YWl0VW50aWwgVGhlIGJyb3dzZXIgd2lsbCBrZWVwIHRoZSBzZXJ2aWNlIHdvcmtlciBydW5uaW5nIHVudGlsIHRoZVxuICogcHJvbWlzZSB5b3UgcGFzc2VkIGluIGhhcyBzZXR0bGVkLlxuICovXG5mdW5jdGlvbiBub3RpZmljYXRpb25DbGlja0xpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBbU2VydmljZSBXb3JrZXJdIE5vdGlmaWNhdGlvbiBjbGljayByZWNlaXZlZC4nKTtcbiAgICBldmVudC5ub3RpZmljYXRpb24uY2xvc2UoKTtcbiAgICBpZiAoIWV2ZW50Lm5vdGlmaWNhdGlvbiB8fCAhZXZlbnQubm90aWZpY2F0aW9uLnRhZykge1xuICAgICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IE5vIG5vdGlmaWNhdGlvbiBvciB0YWcvaWQgcmVjZWl2ZWQsIHNraXBwaW5nIG9wZW4gYWN0aW9uLicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBub3RpZmljYXRpb25JZCA9IGV2ZW50Lm5vdGlmaWNhdGlvbi50YWc7XG4gICAgdmFyIG9wZW5BY3Rpb25VcmwgPSBvcGVuQWN0aW9uc1tub3RpZmljYXRpb25JZF07XG4gICAgaWYgKCFvcGVuQWN0aW9uVXJsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogW1NlcnZpY2UgV29ya2VyXSBObyBhY3Rpb24gZGVmaW5lZCwgZG9pbmcgbm90aGluZy4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkZWxldGUgb3BlbkFjdGlvbnNbbm90aWZpY2F0aW9uSWRdO1xuICAgIC8qKiBAbmFtZXNwYWNlIGNsaWVudHMub3BlbldpbmRvdyAqKi9cbiAgICBldmVudC53YWl0VW50aWwoY2xpZW50cy5vcGVuV2luZG93KG9wZW5BY3Rpb25VcmwpKTtcbn1cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcigncHVzaCcsIHB1c2hMaXN0ZW5lcik7XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ25vdGlmaWNhdGlvbmNsaWNrJywgbm90aWZpY2F0aW9uQ2xpY2tMaXN0ZW5lcik7XG4iXSwibmFtZXMiOlsiaW1wb3J0U2NyaXB0cyIsIkFDVElPTl9OQU1FX0tFWSIsIm9wZW5BY3Rpb25zIiwic2VsZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImpzb25TdHJpbmciLCJkYXRhIiwidGV4dCIsIm9wdGlvbnMiLCJKU09OIiwicGFyc2UiLCJ0aXRsZSIsInRhZyIsIm9wZW5BY3Rpb24iLCJoYXNPd25Qcm9wZXJ0eSIsIndhaXRVbnRpbCIsInJlZ2lzdHJhdGlvbiIsInNob3dOb3RpZmljYXRpb24iLCJjb25zb2xlIiwibG9nIiwibm90aWZpY2F0aW9uIiwiY2xvc2UiLCJub3RpZmljYXRpb25JZCIsIm9wZW5BY3Rpb25VcmwiLCJjbGllbnRzIiwib3BlbldpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=