// 标签管理功能
document.addEventListener('DOMContentLoaded', function() {
    const tagsContainer = document.querySelector('.tags-container');
    const tagInput = document.querySelector('.tag-input');
    const addTagBtn = document.querySelector('.add-tag-btn');

    // 添加标签功能
    addTagBtn.addEventListener('click', function() {
        const tagText = tagInput.value.trim();
        if (tagText) {
            addTag(tagText);
            tagInput.value = '';
        }
    });

    // 回车键添加标签
    tagInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const tagText = tagInput.value.trim();
            if (tagText) {
                addTag(tagText);
                tagInput.value = '';
            }
        }
    });

    // 添加标签函数
    function addTag(text) {
        // 创建新标签
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.textContent = text;

        // 添加删除按钮
        const deleteBtn = document.createElement('span');
        deleteBtn.className = 'delete-tag';
        deleteBtn.innerHTML = '&times;';
        deleteBtn.addEventListener('click', function() {
            tag.remove();
        });

        tag.appendChild(deleteBtn);
        tagsContainer.appendChild(tag);

        // 添加动画
        tag.style.animation = 'tagAnimation 0.5s ease-out';
        setTimeout(() => {
            tag.style.animation = '';
        }, 500);
    }

    // 初始化默认标签
    const defaultTags = ['二次元', '动漫', '游戏'];
    defaultTags.forEach(tag => {
        addTag(tag);
    });
});
