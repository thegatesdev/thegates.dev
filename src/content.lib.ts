export function rootfulId({ id }: { id: string }): string | undefined {
  return id === "index" ? undefined : id;
}
