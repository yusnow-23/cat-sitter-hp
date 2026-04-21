/** Form validation for the contact page */
export const initFormValidation = (): void => {
  const form = document.getElementById(
    "contact-form",
  ) as HTMLFormElement | null;
  if (!form) return;

  const showError = (inputId: string, message: string): void => {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(
      `error-${inputId.replace("form-", "")}`,
    );
    if (input) input.classList.add("has-error");
    if (errorEl) errorEl.textContent = message;
  };

  const clearError = (inputId: string): void => {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(
      `error-${inputId.replace("form-", "")}`,
    );
    if (input) input.classList.remove("has-error");
    if (errorEl) errorEl.textContent = "";
  };

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate name
    const nameInput = document.getElementById("form-name") as HTMLInputElement;
    if (!nameInput.value.trim()) {
      showError("form-name", "お名前を入力してください。");
      isValid = false;
    } else {
      clearError("form-name");
    }

    // Validate email
    const emailInput = document.getElementById(
      "form-email",
    ) as HTMLInputElement;
    if (!emailInput.value.trim()) {
      showError("form-email", "メールアドレスを入力してください。");
      isValid = false;
    } else if (!validateEmail(emailInput.value)) {
      showError("form-email", "正しいメールアドレスを入力してください。");
      isValid = false;
    } else {
      clearError("form-email");
    }

    if (!isValid) return;

    // Demo completion
    alert("ご予約・お問い合わせを受け付けました！（デモ）");
    form.reset();
  });

  // Clear errors on input
  ["form-name", "form-email"].forEach((id) => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener("input", () => clearError(id));
    }
  });
};
