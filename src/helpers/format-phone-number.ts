export const formatPhoneNumber = (phone: string) => {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `+7 (${match[1]}) ${match[2]}-${match[3]}`;
  }
  return "+7 (999) 999-99-99";
};
