// moduleloader.ts
window.addEventListener("load", function() {
  let byImport = {};
  for (let target of document.getElementsByTagName("helper")) {
    let cmp = target.getAttribute("component");
    if (!cmp) {
      continue;
    }
    if (!byImport[cmp]) {
      byImport[cmp] = [];
    }
    byImport[cmp].push({
      target
    });
  }
  for (let importname of Object.keys(byImport)) {
    import(importname).then((c) => {
      for (let y of byImport[importname]) {
        new c.default({
          target: y.target,
          hydrate: true
        });
      }
    });
  }
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3YvbW9kdWxlbG9hZGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgbGV0IGJ5SW1wb3J0OiAgeyBbaWQ6IHN0cmluZ10gOiB7IHRhcmdldDogRWxlbWVudH1bXTsgfSAgPSB7fVxuICAgIGZvcihsZXQgdGFyZ2V0IG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVscGVyXCIpKSB7XG4gICAgICAgIGxldCBjbXAgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29tcG9uZW50XCIpO1xuICAgICAgICBpZiAoIWNtcCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFieUltcG9ydFtjbXBdKSB7XG4gICAgICAgICAgICBieUltcG9ydFtjbXBdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYnlJbXBvcnRbY21wXS5wdXNoKHtcbiAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZm9yIChsZXQgaW1wb3J0bmFtZSBvZiBPYmplY3Qua2V5cyhieUltcG9ydCkpIHtcbiAgICAgICAgaW1wb3J0KGltcG9ydG5hbWUpLnRoZW4oYyA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCB5IG9mIGJ5SW1wb3J0W2ltcG9ydG5hbWVdKSB7XG4gICAgICAgICAgICAgICAgbmV3IGMuZGVmYXVsdCh7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogeS50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgIGh5ZHJhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsT0FBTyxpQkFBaUIsUUFBUSxXQUFXO0FBQ3ZDLE1BQUksV0FBdUQsQ0FBQztBQUM1RCxXQUFRLFVBQVUsU0FBUyxxQkFBcUIsUUFBUSxHQUFHO0FBQ3ZELFFBQUksTUFBTSxPQUFPLGFBQWEsV0FBVztBQUN6QyxRQUFJLENBQUMsS0FBSztBQUNOO0FBQUEsSUFDSjtBQUNBLFFBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRztBQUNoQixlQUFTLEdBQUcsSUFBSSxDQUFDO0FBQUEsSUFDckI7QUFDQSxhQUFTLEdBQUcsRUFBRSxLQUFLO0FBQUEsTUFDZjtBQUFBLElBQ0osQ0FBQztBQUFBLEVBQ0w7QUFDQSxXQUFTLGNBQWMsT0FBTyxLQUFLLFFBQVEsR0FBRztBQUMxQyxXQUFPLFlBQVksS0FBSyxPQUFLO0FBQ3pCLGVBQVMsS0FBSyxTQUFTLFVBQVUsR0FBRztBQUNoQyxZQUFJLEVBQUUsUUFBUTtBQUFBLFVBQ1YsUUFBUSxFQUFFO0FBQUEsVUFDVixTQUFTO0FBQUEsUUFDYixDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0osQ0FBQztBQUFBLEVBQ0w7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=