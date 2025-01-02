/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "ghostty",

  extras: (_) => ["\r"],

  rules: {
    source: ($) => repeat($._line),

    _line: ($) =>
      seq($._whitespace, choice($.comment, $.assignment), $._newline),

    comment: (_) => seq(/#[^\n]*/),

    assignment: ($) =>
      seq($._keyword, $._whitespace, "=", $._whitespace, $.value),

    _keyword: ($) => choice($.keyword, $.invalid_keyword),

    keyword: (_) =>
      choice(
        "abnormal-command-exit-runtime",
        "adjust-box-thickness",
        "adjust-cell-height",
        "adjust-cell-width",
        "adjust-cursor-height",
        "adjust-cursor-thickness",
        "adjust-font-baseline",
        "adjust-overline-position",
        "adjust-overline-thickness",
        "adjust-strikethrough-position",
        "adjust-strikethrough-thickness",
        "adjust-underline-position",
        "adjust-underline-thickness",
        "adw-toolbar-style",
        "auto-update",
        "auto-update-channel",
        "background",
        "background-blur-radius",
        "background-opacity",
        "bold-is-bright",
        "class",
        "click-repeat-interval",
        "clipboard-paste-bracketed-safe",
        "clipboard-paste-protection",
        "clipboard-read",
        "clipboard-trim-trailing-spaces",
        "clipboard-write",
        "command",
        "config-default-files",
        "config-file",
        "confirm-close-surface",
        "copy-on-select",
        "cursor-click-to-move",
        "cursor-color",
        "cursor-invert-fg-bg",
        "cursor-opacity",
        "cursor-style",
        "cursor-style-blink",
        "cursor-text",
        "custom-shader",
        "custom-shader-animation",
        "desktop-notifications",
        "enquiry-response",
        "focus-follows-mouse",
        "font-codepoint-map",
        "font-family",
        "font-family-bold",
        "font-family-bold-italic",
        "font-family-italic",
        "font-feature",
        "font-size",
        "font-style",
        "font-style-bold",
        "font-style-bold-italic",
        "font-style-italic",
        "font-synthetic-style",
        "font-thicken",
        "font-variation",
        "font-variation-bold",
        "font-variation-bold-italic",
        "font-variation-italic",
        "foreground",
        "freetype-load-flags",
        "fullscreen",
        "grapheme-width-method",
        "gtk-adwaita",
        "gtk-single-instance",
        "gtk-tabs-location",
        "gtk-titlebar",
        "gtk-wide-tabs",
        "image-storage-limit",
        "initial-command",
        "initial-window",
        "keybind",
        "link",
        "link-url",
        "linux-cgroup",
        "linux-cgroup-hard-fail",
        "linux-cgroup-memory-limit",
        "linux-cgroup-processes-limit",
        "macos-auto-secure-input",
        "macos-icon",
        "macos-icon-frame",
        "macos-icon-ghost-color",
        "macos-icon-screen-color",
        "macos-non-native-fullscreen",
        "macos-option-as-alt",
        "macos-secure-input-indication",
        "macos-titlebar-proxy-icon",
        "macos-titlebar-style",
        "macos-window-shadow",
        "minimum-contrast",
        "mouse-hide-while-typing",
        "mouse-scroll-multiplier",
        "mouse-shift-capture",
        "osc-color-report-format",
        "palette",
        "quick-terminal-animation-duration",
        "quick-terminal-autohide",
        "quick-terminal-position",
        "quick-terminal-screen",
        "quit-after-last-window-closed",
        "quit-after-last-window-closed-delay",
        "resize-overlay",
        "resize-overlay-duration",
        "resize-overlay-position",
        "scrollback-limit",
        "selection-background",
        "selection-foreground",
        "selection-invert-fg-bg",
        "shell-integration",
        "shell-integration-features",
        "term",
        "theme",
        "title",
        "unfocused-split-fill",
        "unfocused-split-opacity",
        "vt-kam-allowed",
        "wait-after-command",
        "window-colorspace",
        "window-decoration",
        "window-height",
        "window-inherit-font-size",
        "window-inherit-working-directory",
        "window-new-tab-position",
        "window-padding-balance",
        "window-padding-color",
        "window-padding-x",
        "window-padding-y",
        "window-save-state",
        "window-step-resize",
        "window-theme",
        "window-title-font-family",
        "window-vsync",
        "window-width",
        "working-directory",
        "x11-instance-name",
      ),

    invalid_keyword: (_) => /[\w-]+/,

    value: (_) => /[^\n]+/,

    _newline: (_) => "\n",
    _whitespace: (_) => /\s*/,
  },
});