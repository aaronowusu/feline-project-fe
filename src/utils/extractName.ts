const extractName = (text: string): string | null => {
  const pattern = /Hey\s(\w+)!/;

  const match = text.match(pattern);
  return match ? match[1] : null;
};

export default extractName;
