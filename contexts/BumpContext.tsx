export function bumpBookingsBadge() {
  const el = document.getElementById("bookings-badge");
  if (!el) return;
  el.classList.remove("bump");
  
  void (el as HTMLElement).offsetWidth;
  el.classList.add("bump");
}