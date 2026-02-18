// 时间状态判断模块
// 用于检测最近更新时间的健康状态

export type UpdateStatus = "normal" | "new" | "warn" | "error";

export function getUpdateStatus(latestPostDate: Date | null): UpdateStatus {
  if (!latestPostDate) return "normal";

  const now = new Date();

  const diffDays = Math.floor(
    (now.getTime() - latestPostDate.getTime()) /
    (1000 * 60 * 60 * 24)
  );

  // 未来时间 = 数据异常
  if (diffDays < 0) return "error";

  // 七天以内
  if (diffDays <= 7) return "new";

  // 超过 180 天
  if (diffDays >= 180) return "warn";

  return "normal";
}
