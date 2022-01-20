import { StyleSheet } from "react-native";

const PICKER_ITEM_HEIGHT = 30,
  ABSOLUTE_WITH_FULL_SIZE = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

/**
 * 导出项目高度
 */
export const pickerItemHeight = PICKER_ITEM_HEIGHT;

/**
 * 主样式
 */
export const mainStyles = StyleSheet.create({
  container: Object.assign({}, ABSOLUTE_WITH_FULL_SIZE, {
    backgroundColor: "rgba(0,0,0,0.2)",
  }),
  popbox: {
    width: "100%",
    height: 260,
    backgroundColor: "#fff",
  },
  box: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
});

/**
 * 相邻元素样式
 */
export const siblingStyles = StyleSheet.create({
  horizontal: { flex: 1, height: "100%" },
  vertical: { flex: 1, width: "100%" },
});

/**
 * 工具条样式
 */
export const toolbarStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
  },
  button: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelText: {
    color: "#c73e3a",
    fontSize: 18,
  },
  confirmText: {
    color: "#c73e3a",
    fontSize: 18,
  },
});

/**
 * 遮罩样式
 */
export const overlayStyles = StyleSheet.create({
  container: ABSOLUTE_WITH_FULL_SIZE,
  beyond: {
    backgroundColor: "rgba(255,255,255,1)",
  },
  item: {
    width: "100%",
    height: PICKER_ITEM_HEIGHT,
  },
  offset0: {
    borderWidth: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#eee",
  },
  offset1: {
    backgroundColor: "rgba(255,255,255,0.6)",
  },
  offset2: {
    backgroundColor: "rgba(255,255,255,0.9)",
  },
});

/**
 * 选择器样式
 */
export const pickerStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

/**
 * 选择器任一子项样式
 */
export const pickerItemStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: PICKER_ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});
