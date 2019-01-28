/**
 * @param {string[]} emails
 * @return {number}
 */
const standardizeEmail = (email) => {
  const [localName, domain] = email.split('@');
  let standardLocalName = localName.replace(/\+.*$|\./g, '');
  return `${standardLocalName}@${domain}`;
}

const numUniqueEmails = (emails) => {
  const uniqueEmails = {};
  let uniqueCount = 0;
  for (const email of emails) {
    const standardEmail = standardizeEmail(email);
    if (uniqueEmails[standardEmail] === undefined) {
      uniqueCount++;
      uniqueEmails[standardEmail] = true;
    }
  }
  return uniqueCount;
}
