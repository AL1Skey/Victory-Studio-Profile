# <script lang=""></script>
- Executed in prerendered
- Need export default to use the variable in template
```vue
<script lang="ts" >
import footerData from "@/public/json/footer.json";
const data = footerData;
export default {
  data() {
    return {
      data: footerData,
    };
  },
};
</script>
```
# <script lang="ts" setup>
- Executed in rendered
- Doesn't need export default to use the variable in template
```vue
<script lang="ts" setup>
import footerData from "@/public/json/footer.json";
const data = footerData;

</script>
```