// TAB NAVIGATION
function showTab(tabId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

// JAM REAL-TIME
function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText =
    now.toLocaleTimeString("id-ID");
}
setInterval(updateClock, 1000);
updateClock();

// NOTIFICATION PERMISSION
if ("Notification" in window) {
  Notification.requestPermission();
}

// SET REMINDER
function setReminder(button, taskName) {
  const input = button.previousElementSibling;
  const reminderTime = new Date(input.value).getTime();
  const now = new Date().getTime();

  if (!input.value) {
    alert("Pilih waktu pengingat!");
    return;
  }

  const delay = reminderTime - now;

  if (delay <= 0) {
    alert("Waktu harus di masa depan!");
    return;
  }

  alert("Alarm berhasil disetel!");

  setTimeout(() => {
    alert("⏰ Reminder!\nTugas: " + taskName);

    if (Notification.permission === "granted") {
      new Notification("Deadline Tugas!", {
        body: taskName,
      });
    }
  }, delay);
}
